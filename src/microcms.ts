import { createClient } from "microcms-js-sdk";

// サーバー起動時にターミナル側に表示されます（ブラウザのコンソールではなく、VS Codeなどのターミナルです）
console.log("DOMAIN:", import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN);
console.log("KEY:", import.meta.env.PUBLIC_MICROCMS_API_KEY);

export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

// ブログ記事の型定義（画像フィールドがある場合）
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};