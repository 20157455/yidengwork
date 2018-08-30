import $ from 'jquery'




    //点赞父类
    class PraiseButton{
        constructor(){
            this.__praises = 0
            this.__isPraised = false
        }
        __praiseMethod(flag=true){
            flag ? this.__praises++ : this.__praises--
            this.__isPraised = !this.__isPraised   
        }
    }
    
    //点赞子类
    class Thumb extends PraiseButton{
        constructor(options){
            super()
            let wrapperDOM,innerDOM,innerCount,innerText,innerBTN
            this.__wrapperDOM = wrapperDOM = $('<div></div>')
            this.__innerDOM = innerDOM = $('<div></div>')
            this.__innerCount = innerCount = $('<span></span>')
            this.__innerBTN = innerBTN = $('<button>点赞</button>')
            this.__innerText = innerText = $('<span></span>')
            wrapperDOM.append(innerDOM)
            innerDOM.append(innerCount)
            innerDOM.append(innerBTN)
            innerDOM.append(innerText)
            wrapperDOM.css(options)
            innerBTN.on('click',this.btnClick.bind(this))
        }
        btnClick(e){
            this.__praiseMethod()
            if(this.__isPraised){
                this.__innerText.text('+1')
                this.__innerBTN.css('color','red')
            }else{
                this.__innerText.text('')
                this.__innerBTN.css('color','#333')
            }
            this.__innerCount.text(`点击了${this.__praises}次`)
        }
        render(){
            return this.__wrapperDOM
        }
    }
    
    
    
    //挂载jquery点赞组件
    $.fn.praiseBtn = function(options){
        $(this).append(new Thumb(options).render())
    }

    //使用组件
    $('#praise').praiseBtn({
        border:'1px solid #333',
        width:'100px',
        height:'100px'
    })


export class q {
    constructor() {
      this.es6 = 'yay';
    }
  }

