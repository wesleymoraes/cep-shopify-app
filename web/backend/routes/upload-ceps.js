import express from 'express'
import multer from 'multer'
import xlsx from 'xlsx'
import { shopify } from '../shopify.js'

const router = express.Router()
const upload = multer({ dest: 'uploads/' })

router.post('/upload-ceps', upload.single('file'), async (req, res) => {
  const workbook = xlsx.readFile(req.file.path)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const data = xlsx.utils.sheet_to_json(sheet)

  const ceps = [...new Set(data.map(row => String(row['CEP']).replace(/\D/g, '')))]

  const session = res.locals.shopify.session

  await shopify.api.rest.Metafield.create({
    session,
    metafield: {
      namespace: 'custom',
      key: 'ceps',
      type: 'json',
      value: JSON.stringify(ceps),
      owner_resource: 'shop',
    },
  })

  res.status(200).send({ success: true })
})

export default router