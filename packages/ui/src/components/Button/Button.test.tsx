import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

describe('Components - Button', () => {
  describe('Accessibility', () => {
    it('should have the role button by default', () => {
      render(<Button>Hello World!</Button>)

      expect(
        screen.getByRole("button", {name: /hello world!/i})
      ).toBeInTheDocument()
    })

    it('should have the type button by default', () => {
      render(<Button>Hello World!</Button>)

      expect(
        screen.getByRole("button", {name: /hello world!/i})
      ).toHaveAttribute("type", "button")
    })

    it('should have any type provided', () => {
      render(<Button type="submit">Hello World!</Button>)

      expect(
        screen.getByRole("button", {name: /hello world!/i})
      ).toHaveAttribute("type", "submit")
    })

    it('should be disabled if the disabled is true', () => {
      render(<Button disabled>Hello World!</Button>)

      expect(
        screen.getByRole("button", {name: /hello world!/i})
      ).toBeDisabled()
    })
   })

  describe('Interaction', () => {
    it("should not trigger onClick if the button is disabled", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button disabled onClick={onClick}>Hello world</Button>)

      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it("should trigger onClick if the button is not disabled", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<Button onClick={onClick}>Hello world</Button>)

      await user.click(screen.getByRole('button'))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should focus when tab is pressed', async () => {
      const user = userEvent.setup()
      render(<button>Hello World!</button>)

      await user.tab()

      expect(screen.getByRole('button')).toHaveFocus()
    })

    it('should be possible to tab out', async () => {
      const user = userEvent.setup()
      render(<>
        <button>Hello World!</button>
        <button>Hello World!</button>
        <button>Hello World!</button>
      </>)
      const buttons = screen.getAllByRole('button')

      await user.tab()
      expect(buttons[0]).toHaveFocus()

      await user.tab()
      expect(buttons[1]).toHaveFocus()

      await user.tab()
      expect(buttons[2]).toHaveFocus()
    })
  })

  describe('Props', () => {
    it("should render child when asChild is true", () => {
      render(
        <Button asChild>
          <a href="#">link</a>
        </Button>
      )

      expect(screen.getByRole('link')).toBeInTheDocument()
      expect(screen.getByRole('link')).toHaveAttribute("href", "#")
    })
   })
 })