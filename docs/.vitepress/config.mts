import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'zh',
    title: "AI & Data Science",
    description: "AI & Data Science",
    head: [
        ['link', {rel: 'icon', href: '/favicon-32x32.png'}]
    ],
    lastUpdated: true,
    themeConfig: {
        logo: '/favicon.ico',
        outline: {
            level: [2, 3]
        },
        nav: [
            {text: '主页', link: '/'},
            {text: 'NumPy', link: '/numpy/numpy-introduction'},
            {text: 'Pandas', link: '/pandas/1'},
            {text: 'Matplotlib', link: '/matplotlib/1'},
        ],
        sidebar: {
            '/numpy/': [
                {
                    text: 'NumPy',
                    items: [
                        {text: 'NumPy 简介', link: '/numpy/numpy-introduction'},
                        {text: 'NumPy 安装', link: '/numpy/numpy-install'},
                        {text: 'NumPy Ndarray', link: '/numpy/numpy-ndarray'},
                        {text: 'NumPy 数据类型', link: '/numpy/numpy-dtype'},
                        {text: 'NumPy 数组属性', link: '/numpy/numpy-array-attributes'},
                        {text: 'NumPy 创建数组', link: '/numpy/numpy-array-creation'},
                        {text: 'NumPy 从已有的数组创建数组', link: '/numpy/numpy-array-from-existing-data'},
                        {text: 'NumPy 从数值范围创建数组', link: '/numpy/numpy-array-from-numerical-ranges'},
                        {text: 'NumPy 切片和索引', link: '/numpy/numpy-indexing-and-slicing'},
                        {text: 'NumPy 高级索引', link: '/numpy/numpy-advanced-indexing'},
                        {text: 'NumPy 广播', link: '/numpy/numpy-broadcast'},
                        {text: 'NumPy 迭代数组', link: '/numpy/numpy-terating-over-array'},
                        {text: 'NumPy 数组操作', link: '/numpy/numpy-array-manipulation'},
                        {text: 'NumPy 数学函数', link: '/numpy/numpy-mathematical-functions'},
                        {text: 'NumPy 统计函数', link: '/numpy/numpy-statistical-functions'},
                        {text: 'NumPy 排序、条件筛选函数', link: '/numpy/numpy-sort-search'},
                        {text: 'NumPy 线性代数', link: '/numpy/numpy-linear-algebra'},
                    ]
                }
            ],
            '/pandas/': [
                {
                    text: 'Pandas',
                    items: [
                        {text: 'Python 面向对象', link: '/object/python-object'},
                    ]
                }
            ],
            '/matplotlib/': [
                {
                    text: 'Matplotlib',
                    items: [
                        {text: 'Python 高级特性', link: '/characteristics/advanced-features'},
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/xuehang-org/ai-data-science'},
            {icon: 'twitter', link: 'https://x.com/xuehang_org'},
        ],
        footer: {
            message: '基于 MIT 许可发布',
            copyright: '版权所有 © 2025 xuehang.org'
        },
        search: {
            provider: 'local'
        },
    },
    markdown: {
        math: true,
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息',
        }
    }
})