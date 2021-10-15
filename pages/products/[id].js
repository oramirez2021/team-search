import Logo from '../../src/component/logo'
import { useRouter } from 'next/router';
export default function Product(){
    const router = useRouter();
    console.log(router);
    if (!router.isReady){
        return <div>...loading</div>
    }
    const productoID = router.query.id;
    console.log(productoID);
    return(
        <div>
            <h2>My Product {productoID}</h2>
            <Logo/>
        </div>
    )
}