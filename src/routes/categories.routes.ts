import { Router } from "express";
import { prisma } from "../db";


const router = Router();

router.get("/categories", async (req, res) => {
    const categories = await prisma.category.findMany({
        include: {
            products: true,
        }
    });
    res.json(categories);
});

router.post("/categories", async (req, res) => {
    const newCategory = await prisma.category.create({
        data: req.body
    });
    res.json(newCategory);
})

export default router;