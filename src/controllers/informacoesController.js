const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newinformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(newinformacoes);
}

exports.updateInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newinformacoes = await informacoesRepository.updateInformacoes(informacoes);
    res.json(newinformacoes);
}

exports.deleteInformacoes = async (req, res) => {
    await informacoesRepository.deleteInformacoes();
    res.json({message: `Informacoes deleted`});
}