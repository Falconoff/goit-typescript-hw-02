export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
}

// export interface SmallImg {
//   urls: { small: string };
//   alt_description: string;
// }
