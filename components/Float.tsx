import { Popover, Transition } from "@headlessui/react"
import { Float } from "@headlessui-float/react"
// NOTE: replace above import with below to fix issue
// import { Float } from "../headless-fix-dist/headlessui-float"

export function Floating() {
  return (
    <Popover>
        {({ open, close }) => (
          <>
            <Transition show={open}>
              <Popover.Overlay />
            </Transition>
            <Float
              show={open}
              placement="bottom-end"
              offset={15}
              arrow
              flip
              strategy="fixed"
              shift={{ padding: 30 }}
            >
              <Popover.Button>
                {open ? "Close": "Open"}
                <span>Menu</span>
              </Popover.Button>
              <Popover.Panel>
                <div>
                  Popover content.
                </div>
              </Popover.Panel>
            </Float>
          </>
        )}
      </Popover>
  )
}
