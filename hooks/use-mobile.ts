import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value
    if (mql.matches !== isMobile) {
      setIsMobile(mql.matches) // eslint-disable-line react-hooks/set-state-in-effect
    }

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isMobile
}
