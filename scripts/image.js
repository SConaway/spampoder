import sharp from 'sharp'

const main = async () => {

    await sharp('./sammmm.png').toFile('./public/image/image.dzi')
}

main()
