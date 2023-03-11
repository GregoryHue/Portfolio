import { prisma } from '~/utils/prisma.server'
import { useLoaderData } from '@remix-run/react'
import { json, type LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  const techno = await prisma.text.findFirst({
    where: { id: 1 }
  })

  return json({ techno })
}

export default function Index() {
  const { techno } = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            {techno.content ? techno.content : "15m Quickstart Blog Tutorial"}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
