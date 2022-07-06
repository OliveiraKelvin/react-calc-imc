import { Level } from "../../helpers/imc";
import styles from './Griditem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level 
};

export const Griditem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color}}>
            <div className={styles.gridicon}>
            <img src={item.icon == 'up' ? upImage : downImage} alt="" width="30"/>
            </div>
            <div className={styles.gridtitle}>{item.title}</div>

            {item.yourimc &&
                <div  className={styles.yourImc}>Seu IMC é de {item.yourimc} kg/m²</div>
            }

            <div className={styles.gridinfo}>
                <>
                    IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}