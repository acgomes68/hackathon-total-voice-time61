import Provider from '../models/Provider';
import ProviderType from '../models/ProviderType';

class ProviderController {
  async index(req, res) {
    const providers = await Provider.findAll({
      include: [
        {
          model: ProviderType,
          as: 'provider_type',
          attributes: ['name'],
        },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
