import { Client, PageObjectResponse } from '@notionhq/client';
import { Cats } from '../interfaces/cat';

const initNotion = () => {
  return new Client({
    auth: process.env.NOTION_API_KEY,
  });
};

export const getCats = async ({ cursor = undefined }: { cursor?: string }) => {
  const client = initNotion();

  return client.databases
    .query({
      database_id: '1f4a64a5a69980b586c7d9eee3a9268f',
      start_cursor: cursor,
      page_size: 6,
    })
    .then((response) => {
      const cats = response.results
        .filter((cat): cat is PageObjectResponse => 'properties' in cat)
        .map((cat) => {
          console.log(cat);
          const nombreProperty = cat.properties.Nombre;
          const DescripcionProperty = cat.properties.Descripción;
          const name =
            nombreProperty?.type === 'title'
              ? nombreProperty.title?.[0]?.plain_text
              : undefined;

          const image =
            cat.properties.Imagen?.type === 'url'
              ? cat.properties.Imagen.url
              : undefined;

          const description =
            DescripcionProperty?.type === 'rich_text'
              ? DescripcionProperty.rich_text
                  .map((t) => t.plain_text)
                  .join('\n')
              : undefined;

          const adopted =
            cat.properties.Adoptado?.type === 'select' &&
            cat.properties.Adoptado.select?.name === 'Adoptado';

          return {
            ...cat.properties,
            name,
            image,
            description,
            adopted,
            id: cat.id,
          };
        });

      return {
        cats: cats as unknown as Cats[],
        hasMoreData: response.has_more,
        nextCursor: response.next_cursor,
      };
    })
    .catch((error) => {
      console.error('Error fetching cats:', error);
    });
};
