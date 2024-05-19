
import homemAranha from '../../../assets/images/ironman.png';
import { Card, CardContent, CardDescription, CardImage, CardName } from './MainCard.styles';

interface MainCardProps {
  id: number;
  image: string;
  name: string;
  description: string;
}

const MainCard: React.FC<MainCardProps> = ({ id, image, name, description }) => {
  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardContent>
        <CardName>{name}</CardName>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>

  )
}


export default MainCard