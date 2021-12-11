import firestore from '@react-native-firebase/firestore';
//import auth from '@react-native-firebase/auth';
import { DeviceEventEmitter } from 'react-native';
//import storage from '@react-native-firebase/storage'

export default class Database {
    constructor(props) { }
    addData() {

        firestore().collection('shopkeeper').add({
            shopname: 'Big Bazaar',
            categories: [
                {
                    categoryname: 'dairy',
                    qrcode: 'url',
                    products: [
                        {
                            productname: 'milk',
                            product_desc: 'lorem ipsum',
                            product_img: '',
                            price: 'Rs 40',
                            rating: 4,
                            reviews: [
                                {
                                    name: 'anjali',
                                    comment: 'lorem ipsum kkk',
                                    rating: 3.5
                                }
                            ]
                        },
                        {
                            productname: 'curd',
                            product_desc: 'lorem ipsum',
                            product_img: '',
                            price: 'Rs 45',
                            rating: 4,
                            reviews: [
                                {
                                    name: 'anshul',
                                    comment: 'lorem ipsum kkk',
                                    rating: 3.5
                                }
                            ]
                        }
                    ]
                },
                {
                    categoryname: 'biscuits',
                    qrcode: 'url',
                    products: [
                        {
                            productname: 'parle g',
                            product_desc: 'lorem ipsum',
                            product_img: '',
                            price: 'Rs 10',
                            rating: 3,
                            reviews: [
                                {
                                    name: 'anupama',
                                    comment: 'lorem ipsum kkk',
                                    rating: 3.5
                                }
                            ]
                        },
                        {
                            productname: 'jimjam',
                            product_desc: 'lorem ipsum',
                            product_img: '',
                            price: 'Rs 25',
                            rating: 4,
                            reviews: [
                                {
                                    name: 'amrita',
                                    comment: 'lorem ipsum kkk',
                                    rating: 3.5
                                }
                            ]
                        }
                    ]
                }
            ]
        })
            .then((res) => {
                alert("success")
            })
            .catch(err => {
                alert(err);
            })
    }




    saveImage = async (fileName, uploadUri) => {
        await storage().ref(fileName).putFile(uploadUri);
        const url = await storage().ref(fileName).getDownloadURL();
        DeviceEventEmitter.emit("avtaradded", url)

    }
    saveQr = async (fileName, uploadUri) => {
        await storage().ref(fileName).putFile(uploadUri);
        const url = await storage().ref(fileName).getDownloadURL();
        DeviceEventEmitter.emit("qradded", url)

    }

    saveEmergencyData(id, emergencyData) {
        firestore()
            .collection('EmergencyDetail')
            .doc(id)
            .set(
                emergencyData
            )
            .then(() => {

                DeviceEventEmitter.emit("Emergency added", true)

            })
            .catch(err => {

                DeviceEventEmitter.emit("Emergency added", false)
            })
    }
    getScanData(shopid, category) {

        var userData = {}

        firestore()
            .collection('Users')
            .doc(shopid)
            .get()
            .then(doc => {
                data = doc.data()
                data.categories.forEach(element => {
                    if (element.categoryname == category) {
                        DeviceEventEmitter.emit("ScanData", element)
                        return
                    }
                })
            });


    }
    getHomeData(phoneno) {


        firestore().collection('EmergencyDetail').doc(phoneno).get()


            .then((doc) => {

                data = doc.data()




                console.log('Usercollection11', doc.data());
                DeviceEventEmitter.emit("userData", data)
            }
            )
            .catch((err) => {
                alert(err)
            })





    }

    addUser(name, email, phonenumber) {
        firestore()
            .collection('Users')
            .add({
                name: name,
                phonenumber: phonenumber,
                email: email
            })
            .then(() => {
                DeviceEventEmitter.emit("User added", true)

            })
            .catch(err => {
                console.log(err)
            })
    }



    signInwithPhoneNo = async () => {
        let confirmation = await auth().signInWithPhoneNumber(formattedValue)
        console.log('code', confirmation)
        if (confirmation._auth._authResult == true) {
            navigation.navigate('EntercodeScreen')
        }
        else {
            alert('error')
        }
    }



    checkUser(usernumber) {
        var data;


        firestore()
            .collection('Users')
            .where('phonenumber', '==', usernumber)
            .get()
            .then(querySnapshot => {

                if (querySnapshot) {
                    querySnapshot.forEach(doc => {
                        data = doc.data();

                    });
                    console.log('Usercollection', data);
                    if (data != null) {


                        DeviceEventEmitter.emit("check user exits", true)
                    }
                    else if (data == null) {
                        DeviceEventEmitter.emit("check user exits", false)
                    }
                }
            });
    }

}








