import { createSlice } from '@reduxjs/toolkit';
import ahriThumb from '../../assets/ahriThumb.png';
import leeSinThumb from '../../assets/leeSinThumb.png';
import ekkoThumb from '../../assets/ekkoThumb.png';
import luxThumb from '../../assets/luxThumb.png';
import viThumb from '../../assets/viThumb.png';
import brandThumb from '../../assets/brandThumb.png';

const initialState = [
    {
        nome: 'Ahri',
        thumbnail: ahriThumb,
        background: ahriBackground,
        id: 'ahri',
        description: 'Naturalmente ligada à magia do reino espiritual, Ahri é uma vastayesa misteriosa, com traços de raposa, que busca seu lugar no mundo.'
    },
    {
        nome: 'Lee Sin',
        thumbnail: leeSinThumb,
        background: leeSinBackground,
        id: 'leesin',
        description: 'Um mestre das artes marciais ancestrais de Ionia, Lee Sin é um lutador de princípios fortes que canaliza a essência do espírito do dragão para enfrentar qualquer desafio.'
    },
    {
        nome: 'Ekko',
        thumbnail: ekkoThumb,
        background: ekkoBackground,
        id: 'ekko',
        description: 'Um prodígio das violentas ruas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor.'
    },
    {
        nome: 'Lux',
        thumbnail: luxThumb,
        background: luxBackground,
        id: 'lux',
        description: 'Luxanna Stemmaguarda nasceu em Demacia, um reino recluso onde habilidades mágicas são vistas com medo e desconfiança.'
    },
    {
        nome: 'Vi',
        thumbnail: viThumb,
        background: viBackground,
        id: 'vi',
        description: 'Antiga criminosa das ruas impiedosas de Zaun, Vi é uma mulher temível, impulsiva e explosiva com um respeito bem frágil pelas autoridades.'
    },
    {
        nome: 'Brand',
        thumbnail: brandThumb,
        background: brandBackground,
        id: 'brand',
        description: 'A criatura conhecida como Brand já se chamou Kegan Rodhe, um aldeão da gélida Freljord, e é hoje uma lição das consequências que a tentação por poderes maiores pode trazer.'
    }
]

const categoriesSlice = createSlice({
    name: 'categorias',
    initialState,
});

export default categoriesSlice.reducer;