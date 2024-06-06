import {Article} from "./article.ts";
import {Popup} from "./Popup.ts";

export class ArticleTableRenderer {

    private articles: Article[] //Array<Article>

    constructor() {
        this.articles = []
    }

    private addArticle(article: Article) {
        this.articles.push(article)
    }

    private addRowEvent(row: HTMLTableRowElement, article: Article) {
        //au clic sur le tr j'affiche un modal
        row.addEventListener('click', () => {
            const articleContent =
                `<h2>${article.name}</h2>
                <p>Description : ${article.description}</p>
                <p>Prix : ${article.price}</p>`

            Popup.show(articleContent)
        })
    }

    public generateRandomArticles(nbArticles: number) {

        for (let i = 0; i < nbArticles; i++) {

            const article: Article = new Article(
                `Article ${i + 1}`,
                Math.floor(Math.random() * 100),
                `Description ${i + 1}`,
            )
            this.addArticle(article)
        }
    }

    private createTable(headers: string[]): HTMLTableElement {

        const table: HTMLTableElement = document.createElement('table')
        const thead: HTMLTableSectionElement = document.createElement('thead')
        const tr: HTMLTableRowElement = document.createElement('tr')

        //let thead = table.createTHead().insertRow(0)
        headers.forEach(function (val) {
            //pour chaque header je créé le th que j'ajoute dans la table
            const th: HTMLTableCellElement = document.createElement('th')
            th.textContent = val
            tr.append(th)
        })

        table.appendChild(thead).appendChild(tr)
        return table
    }

    public render() {

        const table: HTMLTableElement = this.createTable(["Name", "Description", "Price"])
        //table.createTBody() insère directement un tbody dans la table et renvoie l'élément
        const tbody: HTMLTableSectionElement = table.createTBody()
        //const machin = this.addRowEvent

        this.articles.forEach((article: Article) => {
            ///même chose pour tbody.insertRow()
            const tr: HTMLTableRowElement = tbody.insertRow()
            //map permet de transformer les données en tableau d'élément HTML
            //qui sera joint par la méthide join()
            tr.innerHTML = [article.name, article.description, article.price].map(
                (tdData: string | number): string => `<td>${tdData}</td>`
            ).join('')

            this.addRowEvent(tr, article)
        })

        document.getElementById('app')?.append(table)
    }


}