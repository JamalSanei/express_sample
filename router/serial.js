import express from 'express';
import getSerial from '../db/getSerial.js'


const app = express()
const router = express.Router()



router.get( '/:page', (req, res) => {
    let page = parseInt(req.params.page);
    console.log(page)
    const pageCount = Math.ceil(getSerial.length / 10);
    if (!page) { page = 1;}
    if (page > pageCount) {
      page = pageCount
    }
    let paging= {
      "page": page,
      "pageCount": pageCount,
      "posts": getSerial.slice(page * 10 - 10, page * 10)
    }
    res.send(paging.posts)
})


export default router;