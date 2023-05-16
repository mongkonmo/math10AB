var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "addition-and-multiplication-principles",
  "level": "1",
  "url": "addition-and-multiplication-principles.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Addition and Multiplication Principles of Counting",
  "body": " The Addition and Multiplication Principles of Counting  Hello  "
},
{
  "id": "Probability",
  "level": "1",
  "url": "Probability.html",
  "type": "Chapter",
  "number": "2",
  "title": "Probability",
  "body": " Probability  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
