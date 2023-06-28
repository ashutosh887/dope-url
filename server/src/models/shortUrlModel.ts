import mongoose, { Document } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let nanoid;
// Use dynamic import to import nanoid
import("nanoid").then((nanoidModule) => {
  nanoid = nanoidModule.customAlphabet(
    "abcdefghijklmnopqrstuv0987654321",
    6
  )
})

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

export const shortUrl = mongoose.model<ShortURL>('shortUrl', schema);
