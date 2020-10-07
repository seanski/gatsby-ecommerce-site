import React from "react"
import { Link } from "gatsby"
import { Box, Button, Card, Container, Grid, Heading, Image, Text, useColorMode } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode()

  return(
      <Layout>
        <SEO title="Home" />
        <Button
            onClick={(e) => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
        >
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </Button>
        <Container>
          <Heading as="h1">Very Good Walking Fruit Store</Heading>
          <Grid columns={[1, 2, 3]} gap={20}>
            <Card>
              <Heading>Fresh</Heading>
              <Text>
                Spicy jalapeno bacon ipsum dolor amet shoulder alcatra bresaola meatloaf, t-bone pork chop meatball beef rump bacon pork loin turkey. Chislic bacon filet mignon buffalo tongue pork biltong drumstick doner short loin burgdoggen. Boudin short loin shoulder frankfurter tenderloin brisket chicken jerky ribeye beef ribs andouille ham. Leberkas chicken ribeye, jerky tongue pork loin burgdoggen sirloin corned beef. Spare ribs kevin short loin jowl pig corned beef pork chop turducken meatball brisket chicken tenderloin alcatra.
              </Text>
            </Card>
            <Card>
              <Heading>Tasty</Heading>
              <Text>
                Rump ham hock ribeye spare ribs prosciutto. Turducken beef bresaola ribeye kielbasa corned beef fatback, tongue filet mignon sausage short ribs pork chop spare ribs jerky. Chicken capicola tail, leberkas shoulder beef ribs biltong bacon buffalo. Corned beef leberkas chuck kevin brisket ground round boudin tongue biltong pig. Shoulder beef ribs ball tip boudin.
              </Text>
            </Card>
            <Card>
              <Heading>Organic</Heading>
              <Text>
                Beef ribs pork loin andouille, hamburger alcatra chuck biltong brisket t-bone pastrami kielbasa burgdoggen shank swine meatloaf. Shoulder pork chop meatball frankfurter beef short loin. Jowl chuck spare ribs short ribs shoulder strip steak, cupim chislic pork meatball porchetta tail prosciutto pork chop andouille. Biltong tri-tip spare ribs picanha frankfurter jerky burgdoggen salami andouille buffalo hamburger. Beef ribs ham hock buffalo spare ribs ball tip kielbasa sirloin turkey strip steak. Andouille pork chop porchetta, pork frankfurter short ribs spare ribs shoulder meatloaf burgdoggen filet mignon doner landjaeger chicken.
              </Text>
            </Card>
          </Grid>
          <Grid columns={[1, 2]}>
            <Box>
              <Heading>This Store is Great</Heading>
              <Text variant='caps'>
                Beef ribs pork loin andouille, hamburger alcatra chuck biltong brisket t-bone pastrami kielbasa burgdoggen shank swine meatloaf. Shoulder pork chop meatball frankfurter beef short loin. Jowl chuck spare ribs short ribs shoulder strip steak, cupim chislic pork meatball porchetta tail prosciutto pork chop andouille. Biltong tri-tip spare ribs picanha frankfurter jerky burgdoggen salami andouille buffalo hamburger. Beef ribs ham hock buffalo spare ribs ball tip kielbasa sirloin turkey strip steak. Andouille pork chop porchetta, pork frankfurter short ribs spare ribs shoulder meatloaf burgdoggen filet mignon doner landjaeger chicken.
              </Text>
            </Box>
            <Box>
              <Image src={'https://www.fillmurray.com/400/300'} style={{backgroundSize: 'contain'}} />
            </Box>
          </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
