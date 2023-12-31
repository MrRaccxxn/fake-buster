import { Schema, model, models } from "mongoose";

const newsSchema = new Schema({
  customId: String,
  title: String,
  image: String,
  relatedUrl: String,
  description: String,
  publisherAddress: String,
});

const News = models.News || model("News", newsSchema);

export default News;
