import sharp from 'sharp'

const main = async () => {

    await sharp('./sammmm.png').toFile('./public/image/image.dzi')
    await sharp('./sammmm.png').resize({height: 630}).toFile('./public/preview.png')
}

main()
