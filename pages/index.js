// pages/index.js
import { promises as fs } from 'fs';
import path from 'path';

export default function Home({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public', 'index.html');
  const htmlContent = await fs.readFile(filePath, 'utf8');

  return {
    props: {
      htmlContent,
    },
  };
}
