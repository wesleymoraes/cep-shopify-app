import { useState } from 'react'
import { Page, Layout, Card, DropZone, Button } from '@shopify/polaris'

export default function HomePage() {
  const [file, setFile] = useState(null)

  const handleDrop = (_dropFiles, acceptedFiles) => setFile(acceptedFiles[0])

  const handleUpload = async () => {
    const body = new FormData()
    body.append('file', file)

    await fetch('/api/upload-ceps', {
      method: 'POST',
      body,
    })

    alert('Enviado')
  }

  return (
    <Page title="Importar CEPs">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <DropZone onDrop={handleDrop}>
              {file ? <p>{file.name}</p> : <p>Arraste um CSV/XLSX</p>}
            </DropZone>
            <Button onClick={handleUpload} primary disabled={!file}>
              Enviar
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}