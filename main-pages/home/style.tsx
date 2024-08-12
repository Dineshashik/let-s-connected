'use client'
import {styled, Typography} from '@mui/material'

const Title = styled(Typography)(() => ({
  fontSize: '84px',
  fontWeight: 700,
  lineHeight: '101px',
}))

const SubTitle = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '21px',
}))

export {Title, SubTitle}
