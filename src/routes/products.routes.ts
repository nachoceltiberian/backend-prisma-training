import { Router } from "express";
import { prisma } from "../db";

const router = Router();



router.get("/products", async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
});

router.get("/products/:id", async (req, res) => {
    const product = await prisma.product.findFirst({
        where: {
            id: parseInt(req.params.id),
        },
        include: {
            category: true,
        }
    });

    if (!product) {
        return res.status(404).json({ error: "Product not found" }); 
    }

    res.json(product);
});

router.post("/products", async (req, res) => {
    const newProduct = await prisma.product.create({
        data: req.body
    });
    res.json(newProduct);
});

router.delete("/products/:id", async (req, res) => {
    const product = await prisma.product.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });

    if (!product) {
        return res.status(404).json({ error: "Product to delete not found" }); 
    }

    res.json(product);
});

router.put("/products/:id", async (req, res) => {
    const product = await prisma.product.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    });

    if (!product) {
        return res.status(404).json({ error: "Product to update not found" }); 
    }

    res.json(product);
});

export default router;