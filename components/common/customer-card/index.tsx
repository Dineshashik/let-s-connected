import {
  CardContent,
  Stack,
  Typography
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CustomButton } from '../ui';
import {
  BoxWrapper,
  CustomerCardHeader,
  CustomerCardWrapper,
  StackWrapper
} from './style';

const CustomerCard = ({ data }: any) => {
  const router = useRouter();
  return (
    <CustomerCardWrapper>
      <CustomerCardHeader>
          <Typography variant="h3" align="center" marginBottom={2}>
            {data?.header}
          </Typography>
          <Typography variant="caption" align="center" fontSize={16}>
            {data?.description}
          </Typography>
        </CustomerCardHeader>
        <Stack alignItems="center" paddingBottom={3} borderBottom={'1px solid #DEEAF6'}>
          <CustomButton
              color="gradient"
              // xsWidth="90%"
              onClick={() => router.push(data.redirectPath)}
            >
              {data?.buttonText}
            </CustomButton>
          </Stack>
      <CardContent>
        <BoxWrapper>
          
          <Stack
            justifyContent="space-around"
            direction="column"
            alignItems="left"
            justifyItems="center"
            gap={4}
            paddingTop={2}
          >
            {data?.properties?.map((property: any, index: number) => {
              return (
                // <div className="customer-card">
                  <StackWrapper key={property?.title}>
                  <Image
                    width={48}
                    height={48}
                    alt="logo"
                    src={property?.imgPath}
                  />
                  <Typography
                    variant="h6"
                    align="left"
                  >
                    {property?.title}
                  </Typography>
                  </StackWrapper>
                // </div>
              );
            })}
          </Stack>
        </BoxWrapper>
      </CardContent>
    </CustomerCardWrapper>
  );
};

export default CustomerCard;
