import {gql} from '@apollo/client'


export const WEATHER_QUERY=gql`
query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          description
        }
        temperature {
          actual
          
        }
        wind {
          speed
        }
        
        
      }
    }
  }
`