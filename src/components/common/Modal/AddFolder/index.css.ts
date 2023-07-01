import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color.gray7,
})

export const modalTitle = style({
  marginBottom: '2.4rem',
  fontSize: '2rem',
})

export const modalInput = style({
  marginBottom: '1.5rem',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '0.8rem',
  padding: '1.8rem 1.5rem',
  width: '28rem',
  height: '6rem',
})