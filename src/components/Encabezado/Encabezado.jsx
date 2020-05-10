import React from 'react'
import './Encabezado.css'
const Encabezado= () =>{

    return (
        <div className='container-fuid row colorsEncabezado' >
            <div className='col-sm-2'>
                <a href='www.mercadolibre.com.ar'>
                     <img src='https://static.wixstatic.com/media/c28ad8_1caf8b25df384ba49c634467848cb4fc~mv2.png/v1/fit/w_2500,h_1330,al_c/c28ad8_1caf8b25df384ba49c634467848cb4fc~mv2.png' className='tamanho'></img>
                </a>

            </div>
            <div className='col-sm-7'>

            </div>
            <div className='col-sm-3'>
                <img className='mt-2' src='https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-6d62ecf6-f420-4789-bec2-9d47697b7ac0.png' width='310'></img>
             
            </div>
        </div>
    )
}

export default Encabezado