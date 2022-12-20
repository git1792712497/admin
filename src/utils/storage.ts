
export interface ProxyStorage {
  getItem(key: string): any;
  setItem(Key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
  userInfo?: {
    [key: string]: string;
  };
}

//sessionStorage operate
class sessionStorageProxy implements ProxyStorage {
  protected storage: ProxyStorage;

  constructor(storageModel: ProxyStorage) {
    this.storage = storageModel;
  }

  // 存
  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  // 取
  public getItem(key: string): any {
    console.log("取值----> key", key);
    return JSON.parse(this.storage.getItem(key));
  }

  // 删
  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  // 清空
  public clear(): void {
    this.storage.clear();
  }
}

//localStorage operate
class localStorageProxy extends sessionStorageProxy implements ProxyStorage {
  constructor(localStorage: ProxyStorage) {
    super(localStorage);
  }
}

export const storageSession = new sessionStorageProxy(sessionStorage);

export const storageLocal = new localStorageProxy(localStorage);

const $storageSession = new Proxy(storageSession, {
  get(target, key: string) {
    if (target[key]) return target[key];
    return target.getItem(key);
  },
  set(target, key: string, value) {
    if (Object.hasOwnProperty.call(target, key)) {
      throw new Error(`【${key} 属性不能被修改`);
    }
    target.setItem(key, value);
    return true;
  }
});
const $storageLocal = new Proxy(storageLocal, {
  get(target, key: string) {
    debugger;
    // console.log(
    //   target.hasOwnProperty(key),
    //   key,
    //   target.userInfo,
    //   "--asdfasfdasfd"
    // );
    if (target[key]) return target[key];
    return target.getItem(key);
  },
  set(target, key: string, value) {
    if (Object.hasOwnProperty.call(target, key)) {
      throw new Error(`【${key}】属性不能被修改`);
    }
    target.setItem(key, value);
    return true;
  }
});

// 通过全局读取
Object.defineProperty(window, "$storageSession", {
  get() {
    return $storageSession;
  }
});

Object.defineProperty(window, "$storageLocal", {
  get() {
    return $storageLocal;
  }
});
