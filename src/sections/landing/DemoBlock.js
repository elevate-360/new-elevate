// import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Animation from './Animation';

// assets
import { CheckCircleOutlined, CloseCircleOutlined, SendOutlined } from '@ant-design/icons';
import imgdemo1 from 'assets/images/landing/img-demo1.jpg';
import imgdemo2 from 'assets/images/landing/img-demo2.jpg';
import imgdemo3 from 'assets/images/landing/img-demo3.jpg';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| LANDING - DEMO PAGE ||============================== //

const DemoBlock = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
            <Grid item sm={10} md={6}>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="subtitle1" color="primary">
                    Elevate360 for All
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    Pick Your Plan
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Select your plan to boost your performance management
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Starter
                  </Typography>
                </Grid>
                <Grid item xs={142}>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Essential features.
                  </Typography>
                  <Typography variant="h6" color="error" >
                    <CloseCircleOutlined />&nbsp;&nbsp;
                    Advanced analytics.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Up to 20 Employees
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Email Support
                  </Typography>
                  <Typography variant="h6" color="error" >
                    <CloseCircleOutlined />&nbsp;&nbsp;
                    SMS Support
                  </Typography>
                  <Typography variant="h6" color="error" >
                    <CloseCircleOutlined />&nbsp;&nbsp;
                    Whatsapp Support
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="contained"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2 }}
                        component={Link}
                        href="https://links.codedthemes.com/dAAOP"
                        target="_blank"
                      >
                        Buy Now
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ '& img': { mb: -3.75, width: `calc( 100% + 24px)` } }}>
                  <img src={imgdemo2} alt="feature" />
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3, background: theme.palette.primary.lighter }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Advance
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Advance features.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Basic analytics.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Up to 30 Employees{/*  <Typography variant="h6" color="secondary"> + 10 additional*</Typography> */}
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Email Support
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    SMS Support
                  </Typography>
                  <Typography variant="h6" color="error" >
                    <CloseCircleOutlined />&nbsp;&nbsp;
                    Whatsapp Support
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="contained"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2 }}
                        component={Link}
                        href="https://links.codedthemes.com/dAAOP"
                        target="_blank"
                      >
                        Buy Now
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ '& img': { mb: -3.75, width: `calc( 100% + 24px)` } }}>
                  <img src={imgdemo1} alt="feature" />
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Enterprise
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Advance features.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Advanced analytics.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Up to 50 Employees{/* <Typography variant="h6" color="secondary"> + 20 additional*</Typography> */}
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Email Support
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    SMS Support
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Whatsapp Support
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="contained"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2 }}
                        component={Link}
                        href="https://links.codedthemes.com/dAAOP"
                        target="_blank"
                      >
                        Buy Now
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ '& img': { mb: -3.75, width: `calc( 100% + 24px)` } }}>
                  <img src={imgdemo3} alt="feature" />
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <Animation
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1.5}>
                <Grid item xs={12}>
                  <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                    Custom
                  </Typography>
                </Grid>
                <Grid item xs={142}>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Custom features.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Custom analytics.
                  </Typography>
                  <Typography variant="h6" color="green" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Add any numbers of Epmloyees
                  </Typography>
                  <Typography variant="h6" color="#FAAF00" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Email Support on Choice
                  </Typography>
                  <Typography variant="h6" color="#FAAF00" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    SMS Support on Choice
                  </Typography>
                  <Typography variant="h6" color="#FAAF00" >
                    <CheckCircleOutlined />&nbsp;&nbsp;
                    Whatsapp Support on Choice
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'inline-block' }}>
                    <AnimateButton>
                      <Button
                        variant="contained"
                        endIcon={<SendOutlined />}
                        sx={{ my: 2 }}
                        component={Link}
                        href="https://links.codedthemes.com/dAAOP"
                        target="_blank"
                      >
                        Buy Now
                      </Button>
                    </AnimateButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ '& img': { mb: -3.75, width: `calc( 100% + 24px)` } }}>
                  <img src={imgdemo2} alt="feature" />
                </Grid>
              </Grid>
            </MainCard>
          </Animation>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DemoBlock;
