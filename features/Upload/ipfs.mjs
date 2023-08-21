import { NFTStorage, File } from 'nft.storage'
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhjNDE5NjU3RGJkRTdBYzA2YTBBM2IwQjA2RThlNkU3REI3MmU3NTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MjI2MTE2MTgwNSwibmFtZSI6Ik1ldGFkYXRhIENyZWF0ZSJ9.Rd-9etvKdQPicKsaT2A6YNonD8f-FItu-_BfHrVM6Gk'

async function storeNFT(image, name, description) {
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
    return nftstorage.store({
        image,
        name,
        description,
    })
}

async function main(image, name, description) {
    const result = await storeNFT(image, name, description)
   return result
}
export default main;