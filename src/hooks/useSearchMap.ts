export function useSearchMap(routers, prefixTitle = []) {
    let result = []
    routers.forEach(route => {
        const data = {
            title: [...prefixTitle],
            path: route.path,
        }
        if (route.meta && route.meta.title) {
            data.title = [...data.title, route.meta.title]
            result.push(data)
        }
        if (route.children) {
            const routers = useSearchMap(route.children, data.title)
            if (routers.length > 0) {
                result = [...result, ...routers]
            }
        }
    })
    return result
}