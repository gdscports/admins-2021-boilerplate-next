import {Button, Container, Typography} from '@material-ui/core';
import {NextPage} from 'next';

import Link, {NextLinkComposed} from '../components/Link';

const Page: NextPage = () => (
  <Container maxWidth="sm">
    <Typography variant="h1" component="h1" sx={{mt: 6}} gutterBottom>
      Next.js Boilerplate!
    </Typography>
    <Typography sx={{mt: 6, mb: 3}} color="text.secondary">
      Pro tip: See more{' '}
      <Link href="https://material-ui.com/getting-started/templates/">
        templates
      </Link>{' '}
      on the Material-UI documentation.
      <Button
        component={NextLinkComposed}
        variant="contained"
        sx={{mt: 6, mb: 3}}
        to="https://github.com/gdscports/admins-2021-boilerplate-next-BNXT"
      >
        Clone this on GitHub
      </Button>
    </Typography>
  </Container>
);

export default Page;
