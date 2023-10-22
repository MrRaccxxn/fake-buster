import { Schema, model, models } from "mongoose";

const newsSchema = new Schema({
  title: String,
  relatedUrl: String,
  description: String,
  publisherAddress: String,
});

const News = models.News || model("News", newsSchema);

export default News;
