import {Dimensions, StyleSheet} from 'react-native';
import {RecipeCard} from '../../AppStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  desc: {
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10
  },
  category: RecipeCard.category,
  categoriesPhoto: {
    width: '100%',
    height: windowHeight / 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
});

export default styles;
