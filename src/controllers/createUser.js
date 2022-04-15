const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

let controller = {};

controller.addUser = async (req, res) => {
    let user = req.body;
    console.log(user);
    await prisma.usuarios.create({data: user});
    res.json({
        message: 'ok'
    });
}

module.exports = controller;