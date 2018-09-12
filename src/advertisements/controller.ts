import { JsonController, Get } from 'routing-controllers'
import Ad from './entity'


@JsonController()
export default class AdController {

    @Get('/ads')
    async allAds() {
        const ads = await Ad.find()
        return { ads }
    }

    // ..
}