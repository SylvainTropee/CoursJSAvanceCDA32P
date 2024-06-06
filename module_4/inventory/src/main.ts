import {ArticleTableRenderer} from "./ArticleTableRenderer.ts";
import './style.css'

const myArticleList = new ArticleTableRenderer()
myArticleList.generateRandomArticles(500)
myArticleList.render();