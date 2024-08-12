'use client';
import {
  styled,
  Button,
  Typography,
  Container,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { JSXElementConstructor, ReactNode, useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const colorMap = {
  skyblue: '#2FB4F7',
  blue: '#635BFF',
  black: '#000000',
  white: '#FFFFFF33',
  transparent: 'transparent',
};

const ButtonWrapper = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: '19px',
  padding: '15px 20px',
  borderRadius: '100px',
  textTransform: 'none',
  color: theme.palette.info.light,
  boxShadow: 'none',
  textWrap: 'nowrap',

  [theme.breakpoints.down('md')]: {
    padding: '8px 20px',
    fontSize: '12px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textTransform: 'none',
  marginBottom: '16px',
  padding: '0px 16px',
  [theme.breakpoints.down('md')]: {
    padding: '0px 16px',
  },
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  paddingTop: '4.5rem',
  paddingBottom: '4.5rem',
  [theme.breakpoints.down('lg')]: {
    padding: '2rem 0px',
  },
  [theme.breakpoints.down('md')]: {
    wordWrap: 'break-word',
  },
}));

const InputFieldLabel = styled('label')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '600',
  color: '#0A2540',
}));
// type InputPropsType = {
//   name: string;
//   label: string;
//   type: 'text' | 'password' | 'email' | 'number' | 'submit' | ;
//   register: UseFormRegister<FieldValues>;
//   errors: FieldErrors<FieldValues>;
//   placeholder: string;
// };

type InputPropsType = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'submit' | 'button';
  defaultValue?: string;
  disabled?: boolean;
};

const InputFieldInput = styled(TextField)(({ theme }) => ({
  borderRadius: '7px',
  marginTop: '4px',
  '& input::placeholder': {
    fontSize: '16px',
    color: '#425466',
  },
  '& fieldset': {
    borderColor: '#DEEAF6',
  },
}));

const CustomButton = ({
  variant,
  children,
  color,
  icon,
  xsWidth,
  smWidth,
  mdWidth,
  lgWidth,
  onClick,
  type = 'button',
  isLoading = false,
  loadingText,
}: {
  children: string;
  type?: 'button' | 'submit';
  variant?: 'contained' | 'text' | 'outlined';
  color: "gradient" | 'skyblue' | 'blue' | 'black' | 'white' | 'transparent';
  icon?: 'default' | 'redirect' | undefined;
  xsWidth?: string;
  smWidth?: string;
  mdWidth?: string;
  lgWidth?: string;
  onClick?: () => void;
  isLoading?: boolean;
  loadingText?: string;
}) => {
  const backgroundStyle =
  color === "gradient"
    ? "linear-gradient(90deg, #5EB9EA 0%, #A559A6 100%)" // Directly use the gradient string
    : colorMap[color]; // Use colorMap for predefined colors
  return (
    <ButtonWrapper
    variant={variant || 'contained'}
    sx={{
      background: backgroundStyle, // Apply background style here
      width: { xs: xsWidth, sm: smWidth, md: mdWidth, lg: lgWidth },
      '&:hover': {
        background: backgroundStyle,
      },
    }}
    endIcon={
      icon === 'redirect' ? (
        <OpenInNewOutlinedIcon sx={{ width: '15px', height: '15px' }} />
      ) : (
        icon !== 'default' && (
          <ArrowForwardIosIcon sx={{ width: '15px', height: '15px' }} />
        )
      )
    }
    onClick={onClick}
    type={type}
    disabled={isLoading}
  >
    {isLoading ? loadingText || 'Loading...' : children}
  </ButtonWrapper>
  );
};

const TitleWrapper = ({
  children,
  align,
}: {
  children: string | ReactNode;
  align?: string;
}) => {
  return (
    <Title
      sx={{ textAlign: align || 'left' }}
      variant="h2"
    >
      {children}
    </Title>
  );
};

const ContainerWrapper = ({
  children,
  maxWidth,
}: {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'lg' | 'xl';
}) => {
  return (
    <CustomContainer maxWidth={maxWidth || 'xl'}>{children}</CustomContainer>
  );
};

const InputField = <T extends FieldValues>({
  name,
  label,
  register,
  errors,
  type,
  placeholder,
}: InputPropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack>
      <InputFieldLabel>{label}</InputFieldLabel>
      <InputFieldInput
        {...register(name)}
        placeholder={placeholder}
        // type={type}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        InputProps={{
          endAdornment: type === 'password' && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {errors && errors[name] && (
        <Typography
          m={0}
          fontSize={12}
          color="error"
        >
          {(errors[name] as any).message as string}
        </Typography>
      )}
    </Stack>
  );
};

const TextareaInputField = ({
  name,
  label,
  register,
  errors,
  placeholder,
}: InputPropsType) => {
  return (
    <Stack>
      <InputFieldLabel>{label}</InputFieldLabel>
      <InputFieldInput
        multiline
        rows={3}
        {...register(name)}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span>{(errors[name] as any).message as string}</span>
      )}
    </Stack>
  );
};

export {
  CustomButton,
  TitleWrapper,
  Typography,
  ContainerWrapper,
  InputField,
  TextareaInputField,
};
