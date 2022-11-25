
import { useNavigate } from 'react-router-dom';

export const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
  console.log('handleMenuClick---', item, key, keyPath, domEvent)
  // useNavigate(e.key, {
  //   state: e
  // })
}