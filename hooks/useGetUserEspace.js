import { useEffect, useState } from 'react';
import { useFetchSwr } from './useFetchSwr';

export const useGetUserEspace = () => {
    const [mounted, setMounted] = useState(false);
    const [imageMode, setImageMode] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiAvkk5ghcWyvOo7rY_OHEck0iLCl-IgZog&usqp=CAU')
    const [espace, setEspace] = useState({
        userEspace: 0,
        userHasCompany: false,
        image: imageMode,
    });

    const { data, error } = useFetchSwr(`/api/get-user-espace`, mounted);

    useEffect(() => {
        if (!data?.length) {
        setMounted(true);
        }
    }, []);

    useEffect(() => {
        if (data) {    
            setEspace(data);
            if (data.userConnected.corporateMode === 1) {
                setImageMode(data.userConnected.company.logo);
            } else {
                setImageMode(data.userConnected.image_profile_url);
            }
            // METTRE A JOUR LE COOKIE DU USER
        }
    }, [data]);

    return espace;
}