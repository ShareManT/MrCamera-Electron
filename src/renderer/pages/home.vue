<style scoped lang="scss">
    .album {
        display: flex;
        flex-flow: row nowrap;
        height: 100%;

        &-left {
            flex: 0 0 300px;
            height: 100%;
            border-right: 1px solid #eee;
            transition: all .2s ease-in-out;
            box-shadow: 0 0 5px rgba(0, 0, 0, .1);

            .album-create-btn {
                cursor: pointer;
                padding: 5px 10px;
                border-radius: 20px;
                background: #ffffff;
                transition: background .1s ease-in-out;

                &:hover {
                    color: #ffffff;
                    background: #4e8cfe;
                    background: -webkit-gradient(linear, 0 100%, 0 0, from(#4e8cfe), to(#38b9fd));
                    background: -webkit-linear-gradient(90deg, #4e8cfe, #38b9fd);
                    background: linear-gradient(90deg, #4e8cfe, #38b9fd);
                }
            }

            .album-search {
                padding: 10px 20px;
                outline: 0;
                border: none;
                border-top: 1px solid #efefef;
                width: 100%;
                font-size: .95rem;
                letter-spacing: 1px;
                box-shadow: inset 0 0 8px rgba(177, 177, 177, 0.2);

                &:focus {
                    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
                }
            }

            .album-list {
                height: 80%;
                overflow: auto;

                .album-item {
                    height: 100px;
                    padding: 0 10px;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 1px solid #efefef;
                    cursor: default;
                    line-height: 2;

                    &:first-child {
                        border-top: 1px solid #efefef;
                    }

                    &-name {
                        font-size: 1rem;
                    }

                    &-info {
                        line-height: 1.5;
                        font-size: .9rem;
                    }

                    &:hover {
                        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.1);
                    }
                }

                .album-item-active {
                    color: #ffffff;
                    background: #4e8cfe;
                    background: -webkit-gradient(linear, 0 100%, 0 0, from(#4e8cfe), to(#38b9fd));
                    background: -webkit-linear-gradient(90deg, #4e8cfe, #38b9fd);
                    background: linear-gradient(90deg, #4e8cfe, #38b9fd);
                }
            }

        }

        &-right {
            flex-grow: 1;
            position: relative;

            .album-header {
                position: absolute;
                top: 0;
                width: 100%;
                padding: 10px 20px;
                border-bottom: 1px solid #efefef;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;

                .album-name {
                    font-size: 1rem;

                    span {
                        margin-left: 10px;
                        border-radius: 10px;
                        background: $theme-color;
                        color: #fff;
                        padding: 2px 10px;
                    }
                }

            }

            .album-tip {
                height: 80%;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                letter-spacing: 1px;

                input {
                    text-align: center;
                    margin: 10px;
                    border: 2px solid #efefef;
                    padding: 20px;
                    font-size: 1.2rem;
                    letter-spacing: 2px;
                    border-radius: 4px;
                    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
                }
            }

            .album-main {
                position: relative;
                margin: 60px auto 0 auto;
                padding: 10px 10px 200px 10px;
                overflow: auto;
                height: 100%;

                .photo-item {
                    display: inline-block;
                    overflow: hidden;
                    margin: 4px;

                    &-main {
                        overflow: hidden;
                        position: relative;
                        box-shadow: 0 0 8px rgba(177, 177, 177, .5);

                        &-mask {
                            position: absolute;
                            width: 100%;
                            height: 50px;
                            z-index: 98;
                            bottom: 0;
                            background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0, transparent 100%);
                        }

                        &-image {
                            width: 100%;
                            height: 100%;

                            img {
                                transition: all .2s ease-in-out;
                                object-fit: cover;
                                width: 100%;
                                height: 100%
                            }
                        }

                        &-action {
                            position: absolute;
                            width: 100%;
                            bottom: 0;
                            z-index: 99;
                            padding-bottom: 10px;
                            transition: all .2s ease-in-out;
                            transform: translateY(40px);
                            cursor: pointer;
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-around;
                            align-items: center;
                            color: #ccc;

                            i {
                                &:hover {
                                    color: #fff;
                                    transform: scale(1.2);
                                }
                            }

                            p {
                                color: #999999;
                            }
                        }

                    }

                    &-name {
                        padding: 10px 5px;
                        letter-spacing: 1px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #666;

                        /deep/ input {
                            font-size: .9rem;
                            border: none;
                            background: transparent;
                            border-bottom: 1px dashed #fff;
                        }
                    }

                    &:hover {
                        box-shadow: 2px 2px 8px rgba(177, 177, 177, .6);

                        .photo-item-main-mask {
                            height: 100%;
                        }

                        .photo-item-main-image {
                            img {
                                transform: scale(1.05);
                            }
                        }

                        .photo-item-name {
                            /deep/ input {
                                border-bottom: 1px dashed #ccc;
                            }
                        }

                        .photo-item-main-action {
                            transform: translateY(0);
                        }
                    }
                }

                .photo-item-active {
                    box-shadow: 0 0 8px $theme-color;

                    .photo-item-info {
                        color: $theme-color;
                    }
                }

            }
        }

        &-tool {
            display: flex;
            flex-flow: row nowrap;
            position: fixed;
            align-items: center;
            justify-content: space-between;
            height: 80px;
            bottom: 0;
            right: 0;
            width: calc(100% - 300px);
            background-color: rgba(255, 255, 255, .95);
            border: 1px solid #efefef;
            box-shadow: 0 -2px 10px rgba(177, 177, 177, .2);
            transition: all .2s ease-in-out;
            z-index: 99;

            &-select {
                flex: 0 0 600px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                overflow: hidden;

                &-photo {
                    height: 80px;
                    width: 80px;
                    background-size: cover !important;
                    background-position: center !important;

                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    }
                }

                &-info {
                    padding: 10px;
                    font-size: .95rem;
                    cursor: default;

                    &-name {
                        margin-bottom: 10px;
                        letter-spacing: 1px;
                    }
                }
            }

            &-action {
                flex: 0 0 400px;
                background: red;
            }

            &-slide {
                flex: 0 0 100px;
                padding: 20px;
                transition: all .2s ease-in;

                &:hover {
                    flex: 0 0 200px;
                }
            }

            &:hover {
                box-shadow: 0 -4px 10px rgba(177, 177, 177, .4);
                background: #ffffff;
            }
        }

        .tag {
            cursor: default;
            font-size: .9rem;
            padding: 4px 10px;
            color: #999;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    }
</style>

<template>
    <div class="album">
        <div class="album-left">
            <title-board>
                相册
                <div slot="right">
                    <div class="album-create-btn" @click="createAlbumItem()">
                        <Icon type="ios-add" />
                        新建
                    </div>
                </div>
            </title-board>
            <input class="album-search" placeholder="搜索相册" v-model="params.keyword">
            <div class="album-list scrollable">
                <div v-if="data.albumList.length === 0 && params.keyword === ''" class="album-item album-item-create"
                     @click="createAlbumItem()">
                    <Icon type="md-add" size="24" />
                    创建第一个相册
                </div>
                <Spin v-if="status.loadingAlbumList"></Spin>
                <template v-else>
                    <div class="album-item" :class="{'album-item-active':data.currentAlbum.id === item.id}"
                         v-for="item in data.albumList" :key="item.id" @click="selectAlbumItem(item)">
                        <div class="album-item-name">
                            <Icon type="ios-lock-outline" v-show="item.password" size="20" />
                            {{item.name}}
                        </div>
                        <div class="album-item-info">
                            {{item.description.substring(0,10)}}{{item.description.length > 10 ? '...':''}}
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="album-right">
            <template v-if="!data.currentAlbum.id">
                <div class="album-tip">
                    <Icon type="md-images" size="60" color="#999" />
                    <br>
                    请从左侧选择相册
                </div>
            </template>
            <template v-else-if="form.checkAlbumPassword.password !== data.currentAlbum.password">
                <div class="album-tip">
                    <Icon type="ios-lock-outline" size="60" />
                    <br>
                    {{data.currentAlbum.name}}
                    <br>
                    <input placeholder="请输入相册密码" v-model="form.checkAlbumPassword.password" type="password" />
                </div>
            </template>
            <template v-else>
                <div class="album-header">
                    <div class="album-name">
                        {{data.currentAlbum.name}} <span>{{data.currentAlbum.total || 0}}</span>
                    </div>
                    <div class="album-page">
                        <Page :current.sync="params.page.current" :total="params.page.total"
                              :page-size="params.page.pageSize" simple show-sizer
                              @on-change="queryPhotoList" />
                    </div>
                    <action-button-container v-if="form.checkAlbumPassword.password === data.currentAlbum.password">
                        <action-button-item @click="redirectPage('workspace')">
                            <Icon type="ios-camera-outline" size="28" color="#999" />
                            开始拍照
                        </action-button-item>
                        <action-button-item @click="syncWithLocal(data.currentAlbum)">
                            <Icon type="ios-sync" size="28" color="#999" />
                            与本地同步
                        </action-button-item>
                        <action-button-item @click="editAlbumItem(data.currentAlbum)">
                            <Icon type="ios-build-outline" size="28" color="#999" />
                            设置
                        </action-button-item>
                        <action-button-item @click="deleteAlbumItem(data.currentAlbum)">
                            <Icon type="ios-trash-outline" size="28" color="#999" />
                            删除
                        </action-button-item>
                    </action-button-container>
                </div>
                <div class="album-main scrollable">
                    <Spin size="large" fix v-if="status.loadingPhotoList"></Spin>
                    <div v-for="item in data.photoList" :key="item.id" class="photo-item"
                         :class="{'photo-item-active': item.id === data.currentPhoto.id}"
                         @click="selectPhotoItem(item)">
                        <div class="photo-item-main"
                             :style="{width:config.photoItemSize+'px',height:config.photoItemSize+'px'}">
                            <div class="photo-item-main-mask"></div>
                            <div class="photo-item-main-image">
                                <img :src="item.path">
                            </div>
                            <div class="photo-item-main-action">
                                <Icon size="26" type="md-trash" @click="deletePhotoItem(item)" />
                                <Icon size="26" type="md-star" @click="collectPhotoItem(item)" />
                                <Icon size="26" type="md-download" @click="downloadPhotoItem(item)" />
                            </div>
                        </div>
                        <div class="photo-item-name">
                            <Input @on-focus="data.oldPhotoName = item.name" @on-blur="modifyPhotoItemName"
                                   v-model="item.name" :placeholder="`未命名`" />
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="album-tool" v-if="data.currentAlbum !== {}">
            <div class="album-tool-select">
                <template v-if="data.currentPhoto.id">
                    <div class="album-tool-select-photo" :style="{background:'url('+data.currentPhoto.path+')'}">
                        <img :src="data.currentPhoto.path">
                    </div>
                    <div class="album-tool-select-info">
                        <div class="album-tool-select-info-name">{{data.currentPhoto.name || `未命名
                            ${data.currentPhoto.id}`}}
                        </div>
                        <span class="tag">{{data.currentPhoto.width || 'width'}} x {{data.currentPhoto.height || 'height'}} px</span>
                        <span class="tag">{{data.currentPhoto.format || 'format'}}</span>
                        <span class="tag">{{data.currentPhoto.time || 'time'}}</span>
                    </div>
                </template>
            </div>
            <div class="album-tool-select-action">
            </div>
            <div class="album-tool-slide">
                <Slider v-model="config.photoItemSize" :tip-format="formatSepText" :step="20" :min="100"
                        :max="400"></Slider>
            </div>
        </div>
        <Modal v-model="status.createAlbumItem" width="600" title="新建相册" ok-text="创建"
               @on-ok="submitCreateAlbumItem">
            <Form :model="form.createAlbumItem" label-position="top">
                <FormItem label="相册名称" required>
                    <Input v-model="form.createAlbumItem.name"></Input>
                </FormItem>
                <FormItem label="相册描述">
                    <Input v-model="form.createAlbumItem.description"></Input>
                </FormItem>
                <FormItem label="相册路径" required>
                    <Button type="primary" @click="$electron.ipcRenderer.send('openDirectoryDialog')">选择路径</Button>
                    <span class="tag">{{form.createAlbumItem.directoryPath || ''}}</span>
                </FormItem>
                <FormItem label="相册密码">
                    <Input v-model="form.createAlbumItem.password"></Input>
                </FormItem>
            </Form>
        </Modal>
        <Modal v-model="status.editAlbumItem" width="600" title="编辑相册" ok-text="保存" @on-ok="submitEditAlbumItem">
            <Form :model="form.editAlbumItem" label-position="top">
                <FormItem label="相册名称" required>
                    <Input v-model="form.editAlbumItem.name"></Input>
                </FormItem>
                <FormItem label="相册描述">
                    <Input v-model="form.editAlbumItem.description"></Input>
                </FormItem>
                <FormItem label="相册密码">
                    <Input v-model="form.editAlbumItem.password"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      status: {
        loadingAlbumList: false,
        loadingPhotoList: false,
        createAlbumItem: false,
        editAlbumItem: false
      },
      config: {
        photoItemSize: 200
      },
      data: {
        currentAlbum: {},
        currentPhoto: {},
        oldPhotoName: '',
        albumCount: 0,
        albumList: [],
        photoList: []
      },
      form: {
        checkAlbumPassword: {
          password: ''
        },
        createAlbumItem: {
          name: '',
          description: '',
          password: '',
          directoryPath: ''
        },
        editAlbumItem: {
          name: '',
          description: '',
          password: ''
        }
      },
      params: {
        keyword: '',
        page: {
          current: 1,
          total: 0,
          pageSize: 15
        }
      },
      timer: null
    }
  },
  methods: {
    selectAlbumItem(albumItem) {
      this.clearLastAlbumItem()
      this.data.currentAlbum = albumItem
      this.queryPhotoList()
      this.params.page.current = 1
    },
    selectPhotoItem(photoItem) {
      this.data.currentPhoto = photoItem
    },
    clearLastAlbumItem() {
      this.form.checkAlbumPassword.password = ''
      this.data.currentPhoto = {}
      this.data.photoList = []
    },
    createAlbumItem() {
      this.status.createAlbumItem = true
    },
    editAlbumItem(albumItem) {
      this.form.editAlbumItem = albumItem
      this.status.editAlbumItem = true
    },
    formatSepText(val) {
      return '图片缩略图尺寸: ' + val + '像素'
    },
    collectPhotoItem(photoItem) {
      const {id} = photoItem
      this.$db.update({
        scheme: 'photoList',
        album: this.data.currentAlbum.id,
        id
      }, {$set: {isCollected: true}}, {}, (err, count) => {
        if (err) {
          console.log(err)
        }
        this.$Message.success(`收藏成功！`)
      })
    },
    downloadPhotoItem(photoItem) {
      const {id, photo, name} = photoItem
      let saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      saveLink.href = photo
      saveLink.download = name === '' ? `未命名${id}` : name
      let event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      saveLink.dispatchEvent(event)
    },
    submitCreateAlbumItem() {
      const {name, description, password, directoryPath} = this.form.createAlbumItem
      const newAlbumItem = {
        scheme: 'albumList',
        id: this.$getId().toString(),
        name,
        description,
        password,
        directoryPath
      }
      this.$db.insert(newAlbumItem, () => {
        this.status.createAlbumItem = false
        this.$Message.success(`新建相册"${name}"成功`)
        this.queryAlbumList()
      })
    },
    submitEditAlbumItem() {
      const {id, name, description, password} = this.form.editAlbumItem
      this.$db.update({scheme: 'albumList', id}, {
        $set: {name, description, password}
      }, {}, () => {
        this.status.editAlbumItem = false
        this.status.actionMenu = false
        this.$Message.success(`相册"${name}"编辑成功`)
        this.queryAlbumList()
      })
    },
    redirectPage(pageName) {
      this.$router.push({name: pageName, params: {albumItem: this.data.currentAlbum}})
    },
    queryAlbumList() {
      this.status.loadingAlbumList = true
      const {keyword} = this.params
      const regex = new RegExp(keyword)
      this.$db.find({scheme: 'albumList', name: {$regex: regex}}, (err, albums) => {
        if (err) {
          console.log(err)
        }
        this.data.albumList = albums || []
        this.status.loadingAlbumList = false
      })
    },
    queryPhotoList() {
      this.status.loadingPhotoList = true
      const {current, pageSize} = this.params.page
      const {id} = this.data.currentAlbum
      const skipNum = (current - 1) * pageSize
      this.$db.count({scheme: 'photoList', album: id}, (err, count) => {
        if (err) {
          console.log(err)
        }
        this.data.currentAlbum.total = this.params.page.total = count
      })
      this.$db.find({
        scheme: 'photoList',
        album: id
      }).sort({time: -1}).skip(skipNum).limit(pageSize).exec((err, docs) => {
        if (err) {
          console.log(err)
        }
        this.data.photoList = docs
        this.status.loadingPhotoList = false
      })
    },
    getValidFileName(name) {
      const {id, format} = this.data.currentPhoto
      const regex = /[<>:'|*？/\\]/g
      const validName = this.data.currentPhoto.name = name.replace(regex, '').trim()
      const testPath = this.$path.join(this.data.currentAlbum.directoryPath, `${validName}.${format}`)
      if (regex.test(name)) {
        this.$Message.warning('文件名不能包含非法字符！已自动去除。')
      }
      if (this.$fs.existsSync(testPath)) {
        this.$Message.warning('文件名不能重复！已自动处理。')
        const uniqueName = `${validName} - ${id}`
        this.data.currentPhoto.name = uniqueName
        return uniqueName
      }
      return validName
    },
    modifyPhotoItemName() {
      if (this.data.oldPhotoName === this.data.currentPhoto.name) {
        return false
      }
      const {id, name, album, path, format} = this.data.currentPhoto
      const newName = this.getValidFileName(name)
      const newPath = this.$path.join(this.$path.dirname(path), `${newName}.${format}`)
      this.$db.update({
        scheme: 'photoList',
        album,
        id
      }, {$set: {name: newName, path: newPath}}, {}, (err, docs) => {
        if (err) {
          console.log(err)
        }
        this.$fs.rename(path, newPath, (err) => {
          if (err) {
            console.log(err)
          }
          this.$set(this.data.currentPhoto, 'path', newPath)
        })
      })
    },
    syncWithLocal() {
      this.data.photoList.map((item) => {
        this.$fs.exists(item.path, (isExist) => {
          if (!isExist) {
            this.deletePhotoItem(item)
          }
        })
      })
    },
    deletePhotoItem(photoItem) {
      const {id} = photoItem
      this.$db.remove({scheme: 'photoList', album: this.data.currentAlbum.id, id}, {}, () => {
        this.data.photoList.splice(this.data.photoList.indexOf(photoItem), 1)
        this.$Message.success(`删除成功！`)
      })
    },
    deleteAlbumItem(albumItem) {
      const {id, name} = albumItem
      this.$Modal.confirm({
        title: `确认删相册"${name}"？`,
        content: '相册中的所有图片也将被删除。',
        onOk: () => {
          this.$db.remove({scheme: 'albumList', id}, {}, () => {
            this.$db.find({scheme: 'photoList', album: id}, {}).exec((err, docs) => {
              if (err) {
                console.log(err)
              }
              docs.forEach(photoItem => {
                this.$fs.unlink(photoItem.path, function(error) {
                  if (error) {
                    console.log(error)
                    return false
                  }
                  console.log('删除文件成功')
                })
              })
            })
            this.$db.remove({scheme: 'photoList', album: id}, {multi: true}, (err) => {
              if (err) {
                console.log(err)
              }
              this.data.albumList.splice(this.data.albumList.indexOf(albumItem), 1)
              this.$Message.success(`相册"${name}"删除成功！`)
              this.status.actionMenu = false
            })
          })
        },
        onCancel: () => {
          this.$Message.info('已取消删除相册')
        }
      })
    },
    searchByAlbumName(keyword) {
      this.params.keyword = keyword
      this.queryAlbumList()
    }
  },
  mounted() {
    this.queryAlbumList()
    if (this.$route.query.hasOwnProperty('albumId')) {
      this.$db.findOne({scheme: 'albumList', id: this.$route.query.albumId}, (err, album) => {
        if (err) {
          console.log(err)
        }
        this.selectAlbumItem(album)
      })
    }
    this.$electron.ipcRenderer.on('selectedDirectory', (event, directoryPath) => {
      this.form.createAlbumItem.directoryPath = directoryPath[0]
    })
    // TODO to delete
    // console.log(this.$electron.remote.app.getPath('pictures'));
    // console.log(this.$fs.readdirSync());
  },
  watch: {
    'params.keyword'(keyword) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.searchByAlbumName(keyword)
      }, 800)
    }
  }
}
</script>
