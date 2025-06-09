'use client'

import { Button } from "@mui/material";
import { TbLogin } from "react-icons/tb";
import { useUrlContext } from '@/context/UrlContext'

export default function Login() {
  const { authUrl } = useUrlContext();
  return (
    <Button
      className="flex items-center gap-1"
      variant="outlined"
      color="info"
      onClick={() => window.location.href = authUrl}
    >
      <TbLogin />
      LOGIN
    </Button>
  )
}
