import FormUserDate from "@/app/component/formUserData/FormUserDate";
import Link from "next-intl/link";
import Image from "next/image";

function ServiceRequest() {

    const AddBlock = () => {
        const divShop = {
            display: 'flex',
            width: '400px',
            justifyContent: 'space-evenly',
            marginTop: '20px'
        }

        return (
            <div style={divShop}>
                <Link href='/'>
                    <Image src='/other/playstor.png' alt='' width={135} height={40}/>
                </Link>
                <Link href='/'>
                    <Image src='/other/appstor.png' alt='' width={135} height={40}/>
                </Link>
            </div>
        )
    }


    return <FormUserDate textH2='ЯК МИ МОЖЕМО ВАМ ДОПОМОГТИ?' threeInput='Номер телефону' block={AddBlock()}
                         firstInput=' / Назва компанії' />
}

export default ServiceRequest;