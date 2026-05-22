"use client"

import { createContext, useCallback, useContext, useState } from "react"

type MenuCtx = {
  isOpen: boolean
  immediate: boolean
  open: () => void
  close: () => void
  toggle: () => void
  closeImmediate: () => void
}

const MenuContext = createContext<MenuCtx>({
  isOpen: false, immediate: false,
  open: () => {}, close: () => {}, toggle: () => {}, closeImmediate: () => {},
})

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen]       = useState(false)
  const [immediate, setImmediate] = useState(false)

  // Reset immediate whenever the menu is opened or closed via burger/normal close
  const open           = useCallback(() => { setImmediate(false); setIsOpen(true) }, [])
  const close          = useCallback(() => { setImmediate(false); setIsOpen(false) }, [])
  const toggle         = useCallback(() => { setImmediate(false); setIsOpen(v => !v) }, [])
  // Logo click: close with no animation; immediate stays true until next open/close
  const closeImmediate = useCallback(() => { setImmediate(true); setIsOpen(false) }, [])

  return (
    <MenuContext.Provider value={{ isOpen, immediate, open, close, toggle, closeImmediate }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  return useContext(MenuContext)
}
