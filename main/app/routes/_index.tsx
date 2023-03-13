import { prisma } from '~/utils/prisma.server'
import { useLoaderData } from '@remix-run/react'
import { json, type LoaderFunction } from '@remix-run/node'
import {Button, Typography} from '@mui/material'
import { useTranslation } from "react-i18next";

export const loader: LoaderFunction = async () => {
  const techno = await prisma.text.findFirst({
    where: { id: 1 }
  })

  return json({ techno })
}

export default function Index() {
  const { techno } = useLoaderData()
  let { t } = useTranslation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{t('navbar.home')} to Remix</h1>
      <ul>
        <li>
          <Typography
          >
            {techno.content ? techno.content : "15m Quickstart Blog Tutorial"}
          </Typography>
        </li>
        <li>
            <p>{'home.text'}</p>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <Button> test </Button>
    </div>
  );
}
